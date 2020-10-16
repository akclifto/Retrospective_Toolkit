package retro.toolkit.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ServiceController {

    //using method test as URI
    @GetMapping(path = "hello")
    public String hello() {
        return "message from getMapping";
    }

    //using method test with Bean to make a json file 
    @GetMapping(path = "hello-bean")
    public BackendServiceBean serviceBean() {
        return new BackendServiceBean("New thing to say");
    }


}
