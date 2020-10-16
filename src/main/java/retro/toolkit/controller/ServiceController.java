package retro.toolkit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import retro.toolkit.model.Message;
import retro.toolkit.service.BackendServiceBean;
import retro.toolkit.service.MessageRepository;

// @CrossOrigin(origins = "*", allowedHeaders = "*")
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class ServiceController {


    // Get mapping for index TODO: fix
    // @RequestMapping("/")
    // String index(){
    //     return "index";
    // }

    @Autowired 
    private MessageRepository messageRepository;

    // Mapped for frontend access
    @GetMapping("/")
    public List<Message> getMessages() {
        return this.messageRepository.findAll();
    }

    /*
    Below are examples when learning bean/spring
    */
    // example using method test as URI
    @GetMapping("hello")
    public String hello() {
        return "direct message from getMapping";
    }

    // example using method test with Bean to make a json file 
    @GetMapping("bean-svc")
    public BackendServiceBean serviceBean() {
        return new BackendServiceBean("Test data passing");
    }


    // example using method test with bean and path variable
    @GetMapping({"hello/{name}"})
    public BackendServiceBean servicePath(@PathVariable String name) {
        return new BackendServiceBean(String.format("Hello there, %s", name));
    }


}
