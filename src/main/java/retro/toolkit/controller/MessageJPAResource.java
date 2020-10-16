package retro.toolkit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import retro.toolkit.model.Message;
import retro.toolkit.service.MessageNotFoundException;
import retro.toolkit.service.MessageServiceDao;

@RestController
public class MessageJPAResource {
    

    @Autowired
    private MessageServiceDao messageService;

    @GetMapping("jpa")
    public List<Message> retrieveAllMessages(){
        return messageService.findAll();
    }

    @GetMapping("jpa/{id}")
    public Message retrieveMessage(@PathVariable Integer id) throws MessageNotFoundException {

        Message msg = messageService.findMessageById(id);
        if(msg == null){
            throw new MessageNotFoundException("Message returned null. Id searched: " + id);
        } else {
            return msg;
        }

}
}
