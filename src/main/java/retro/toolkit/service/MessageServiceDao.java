package retro.toolkit.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import retro.toolkit.model.Message;

@Component
public class MessageServiceDao {
    

    public static int messageCount = 3;
    private static List<Message> messages = new ArrayList<>();

    //static block to add some random data
    static {
        messages.add(new Message(1, "First Message", 20));
        messages.add(new Message(2, "Second Message", 50));
        messages.add(new Message(3, "Third Message", 3));
    }

    //return all messages in list.
    public List<Message> findAll() {
        return messages;
    }


    public Message findMessageById(long id){
        for (Message i : messages) {
            if(i.getId() == id) {
                return i;
            }
        }
        System.out.printf("No message found with id: %d\n", id);
        return null;
    }

    /**
     * Method to save a method.  
     * Uses model.Message Class
     * @param message: message to save to the list.
     * @return message saved to the list.
     */
    public Message save(Message message){

        for(Message i : messages) {
            
            if(i.getId() == message.getId()) {
                System.out.printf("duplicate ID found for Message %d \n", i.getId());
                return null;
            }
        } 
        message.setId(++messageCount);
        messages.add(message);
        return message;
    }




}


