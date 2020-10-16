package retro.toolkit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import retro.toolkit.model.Message;
import retro.toolkit.service.MessageRepository;

@RestController
public class MessageController {
    
    @Autowired
    private MessageRepository messageRepository;

    
    public List<Message> getMessages() {
        return this.messageRepository.findAll();
    }

}
