package codexist.GeoFinder.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Places")
public class Place {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name="name")
    private String name;
    @Column(name = "latitude")
    private double latitude;
    private double longitude;

    public Place() {
    }

    public Place( String name, int latitude, int longitude) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }
}
