package retro.toolkit.service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

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

    //random message to generate
    public void setRandomMessage() {
        int i = ThreadLocalRandom.current().nextInt(1, 11);
        this.save(new Message(messageCount, "Here is a random int from the backend! ", i));
    }

    /**
     * Find a single message by id
     * @param id : id to search in messages list
     * @return message with given id.
     */
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

        if(checkID(message)) {
            message.setId(messageCount);
            messages.add(message);
            return message;
        }
        return null;
    }

    /**
     * Method to check id for duplicates, increments id if finds duplicate
     * @param message : message to check for id
     * @return true if id is unique, false otherwise.
     */
    private boolean checkID(Message message) {

        for(Message i : messages) {
            
            if(i.getId() == message.getId()) {
                System.out.printf("duplicate ID found for Message %d \n", i.getId());   
                messageCount++;
                return false;
            }
        } 
        return true;
    }




}


