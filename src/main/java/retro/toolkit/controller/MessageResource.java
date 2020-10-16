package retro.toolkit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import retro.toolkit.model.Message;
import retro.toolkit.service.MessageNotFoundException;
import retro.toolkit.service.MessageServiceDao;

@RestController
public class MessageResource {
    
    @Autowired
    private MessageServiceDao messageService;

    @GetMapping("messages")
    public List<Message> retrieveAllMessages(){
        return messageService.findAll();
    }

    @GetMapping("test")
    public void setRandomMessage(){
        messageService.setRandomMessage();
    }

    //test method to retrieve message by id at new mapping
    @GetMapping("messages/{id}")
    public Message retrieveMessage(@PathVariable Integer id) throws MessageNotFoundException {

        Message msg = messageService.findMessageById(id);
            if(msg == null){
                throw new MessageNotFoundException("Message returned null. Id searched: " + id);
            } else {
                return msg;
            }

    }

    //create a new message via POST
    @PostMapping("messages")
    public void createMessage(@RequestBody Message message){
        Message savedMsg = messageService.save(message);
    }
}
