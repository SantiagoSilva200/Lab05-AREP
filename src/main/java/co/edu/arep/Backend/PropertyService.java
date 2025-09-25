package co.edu.arep.Backend;


import co.edu.arep.Backend.PropertyRepository;
import co.edu.arep.Backend.Property;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PropertyService {
    private final PropertyRepository repo;
    public PropertyService(PropertyRepository repo) { this.repo = repo; }

    public Property create(Property p) { return repo.save(p); }
    public List<Property> findAll() { return repo.findAll(); }
    public Property findById(Long id) { return repo.findById(id).orElse(null); }
    public Property update(Long id, Property newP) {
        return repo.findById(id).map(p -> {
            p.setAddress(newP.getAddress());
            p.setPrice(newP.getPrice());
            p.setSize(newP.getSize());
            p.setDescription(newP.getDescription());
            return repo.save(p);
        }).orElse(null);
    }
    public boolean delete(Long id) {
        if (repo.existsById(id)) { repo.deleteById(id); return true; }
        return false;
    }
}
