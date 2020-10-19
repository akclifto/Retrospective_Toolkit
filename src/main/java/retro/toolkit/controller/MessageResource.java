package retro.toolkit.controller;

import java.net.URI;
import java.util.List;

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

/**
 * This class is a controller and resource for MessageServiceDao utilization.
 * It maps webpaths and uses the MessageServiceDao to perform the necessary logic.
 */

@RestController
public class MessageResource {

    @Autowired
    private MessageServiceDao messageService;

    @GetMapping("messages")
    public List<Message> retrieveAllMessages() {
        return messageService.findAll();
    }

    @GetMapping("messages/test")
    public void setRandomMessage() {
        System.out.println("Setting a random message");
        messageService.save(messageService.setRandomMessage());
    }

    // test method to retrieve message by id at new mapping
    @GetMapping("messages/{id}")
    public Message retrieveMessage(@PathVariable Integer id) throws MessageNotFoundException {

        Message msg = messageService.findMessageById(id);
        if (msg == null) {
            throw new MessageNotFoundException("Message returned null. Id searched: " + id);
        } else {
            return msg;
        }

    }

    // create a new message via POST
    @PostMapping("messages")
    public ResponseEntity<Object> createMessage(@RequestBody Message message) {
        Message sevedMsg = messageService.save(message);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(sevedMsg.getId())
                .toUri();
        return ResponseEntity.created(location).build();
    }

    // Delete a message
    @DeleteMapping("messages/{id}")
    public Message deleteMessage(@PathVariable Integer id) {

        Message msg = messageService.deleteMessage(id);
        if (msg == null) {
            throw new MessageNotFoundException("Message returned null. Id searched: " + id);
        } else {
            return msg;
        }
    }
}
