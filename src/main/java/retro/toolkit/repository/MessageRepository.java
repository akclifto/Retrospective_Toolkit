package retro.toolkit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import retro.toolkit.model.Message;

@Repository
public interface MessageRepository extends JpaRepository<Message, Integer> {
    
}
