package retro.toolkit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import retro.toolkit.model.Message;

@RestController
public class MessageResource {
    
    @Autowired
    private MessageServiceDao messageService;

    @GetMapping("messages")
    public List<Message> retrieveAllMessages(){
        return messageService.findAll();
    }

    //test method to retrieve message by id at new mapping
    @GetMapping("messages/{id}")
    public Message retrieveMessage(@PathVariable long id){
        return messageService.findMessageById(id);
    }
}
