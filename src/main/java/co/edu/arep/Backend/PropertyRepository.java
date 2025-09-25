package co.edu.arep.Backend;

import org.springframework.data.jpa.repository.JpaRepository;
import co.edu.arep.Backend.PropertyRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {
}
