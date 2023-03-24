const countries = ["Greece", "Spain", "Ireland"];

const Paises = () => (
    <ul>
        {countries.map((country, index) => (
            <li className={`countries ${country.toLowerCase()}`} key={index}>
                {country}
            </li>
        ))}
    </ul>
);
export default Paises;
