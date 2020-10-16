package retro.toolkit.service;

/**
 * This service creates a json object to pass information from the backend to the frontend.
 * 
 */
public class BackendServiceBean {

    //these var names need to match the toString [varName: %s], otherwise will get duplicate in the same json
    public long id;
    public String message;
    public int testInt;

    public BackendServiceBean(String msg) {
        this.message = msg;
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String msg) {
        this.message = msg;
    }

    @Override
    public String toString() {
        return String.format("BackendServiceBean [message: %s]", message);
    }

}
