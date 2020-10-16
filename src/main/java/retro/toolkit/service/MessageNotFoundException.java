package retro.toolkit.service;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class MessageNotFoundException extends RuntimeException {
    /**
     * Default serialversionUID
     */
    private static final long serialVersionUID = 1L;

    public MessageNotFoundException(String message) {
        super(message);
    }
}
