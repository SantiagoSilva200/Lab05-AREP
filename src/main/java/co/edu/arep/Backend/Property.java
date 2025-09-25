package co.edu.arep.Backend;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "properties")
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String address;

    @NotNull
    @PositiveOrZero
    private Double price;

    @NotNull
    @Positive
    private Double size;

    @Column(length = 1000)
    private String description;

    // getters y setters (o usar Lombok @Data)
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
    public Double getSize() { return size; }
    public void setSize(Double size) { this.size = size; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
