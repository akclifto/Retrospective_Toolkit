package retro.toolkit.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import retro.toolkit.service.BackendServiceBean;

@RestController
public class ServiceController {


    //Get mapping for index
    @RequestMapping("/")
    String index(){
        return "index";
    }


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
