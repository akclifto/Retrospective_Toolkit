package retro.toolkit.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * This is a model class for the message test that will be passed from backend to React frontend.
 * 
 */
@Entity
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String message;
    private int testInt;

    protected Message(){

    }

    /**
     * Constructor
     * @param id : generated Id
     * @param message : message to be passed
     * @param testInt : test int to be passed
     */
    public Message(Integer id, String message, int testInt){
        super();
        this.id = id;
        this.message = message;
        this.testInt = testInt;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id){
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public int getTestInt() {
        return testInt;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setTestInt(int testInt){
        this.testInt = testInt;
    }

    @Override
    public String toString() {
        return String.format("Message [id=%s, message=%s, testInt=%s]", id, message, testInt);
    }
    
}
