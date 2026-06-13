import type {CityType} from "../types/CityType.ts";
function CityInfo(prop:{city:CityType}) {
    const {city, country, year, photos} = prop.city;
    return (
        <>
            <h2>Моє місто</h2>
            <p>Місто: {city}</p>
            <p>Країна: {country}</p>
            <p>Рік заснування: {year}</p>
            <h3>Пам'ятки міста</h3>
            <img src={photos[0]} width="250" alt="photo1"/>
            <img src={photos[1]} width="250" alt="photo2"/>
            <img src={photos[2]} width="250" alt="photo3"/>
        </>
    );
}
export default CityInfo;