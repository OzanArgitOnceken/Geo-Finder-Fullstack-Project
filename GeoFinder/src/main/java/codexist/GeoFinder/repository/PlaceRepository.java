package codexist.GeoFinder.repository;

import codexist.GeoFinder.model.Place;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaceRepository extends JpaRepository<Place,Long> {
}
