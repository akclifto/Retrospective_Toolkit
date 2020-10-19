package retro.toolkit.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import retro.toolkit.model.Message;
import retro.toolkit.service.MessageNotFoundException;
import retro.toolkit.service.MessageServiceDao;
import retro.toolkit.repository.MessageRepository;

/**
 * This class is a controller and resource for Message Repository Interface to test local data storage
 */
@RestController
public class MessageJPAResource {


    @Autowired 
    private MessageRepository messageRepository;
    private MessageServiceDao serviceDao;

    @GetMapping("jpa")
    public List<Message> retrieveAllMessages() {
        return messageRepository.findAll();
    }

    // test method to retrieve message by id at new mapping
    @GetMapping("jpa/{id}")
    public Optional<Message> retrieveMessage(@PathVariable Integer id) throws MessageNotFoundException {

        // Message msg = messageService.findMessageById(id);
        Optional<Message> msg = messageRepository.findById(id);

        if (!msg.isPresent()) {
            throw new MessageNotFoundException("Message returned null. Id searched: " + id);
        } else {
            return msg;
        }

    }

    @GetMapping("jpa/test")
    public void setRandomMessage() {
        messageRepository.save(serviceDao.setRandomMessage());
    }

    // create a new message via POST
    @PostMapping("jpa")
    public ResponseEntity<Object> createMessage(@RequestBody Message message) {
        Message sevedMsg = messageRepository.save(message);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(sevedMsg.getId())
                .toUri();
        return ResponseEntity.created(location).build();
    }

    // Delete a message
    @DeleteMapping("jpa/{id}")
    public void deleteMessage(@PathVariable Integer id) {
        messageRepository.deleteById(id);
    }

}
