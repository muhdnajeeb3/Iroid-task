import React, {  useState } from "react";
import { Button, Card } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

function LaunchesCard({
  mission_name,
  launch_date_local,
  flight_number,
  launch_year,
  launch_date_utc,
  tentative_max_precision,
  reused,
  rocket_type,
  nationality,
  payload_type,
  details,
  launch_failure_details,
  mission_patch,
  


}) {
  console.log("pic",); 
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const DETAILSHANDLER = () => {
    
    navigate("/details", {
      state: { 
        mission_name,
        launch_date_local,
        flight_number,
        launch_year,
        launch_date_utc,
        tentative_max_precision,
        reused,
        rocket_type,
        nationality,
        payload_type,
        details,
        
      },
    });
  };

  return (
    <div className="cardwrappper">
      <Card
        style={{
          width: "18rem",
          color: "#fff",
          // display: "grid",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "40px",
          border: "2px solid",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <Card.Img
          variant="top"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSERgSERUYGBgYGBgYGBgYGBgYGBgYGBgZGRgYGBgcIS4lHB4rIRgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISHzQhISs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABEEAACAgECBAMFBAUKBAcAAAABAgARAxIhBAUxQSJRYQYTcYGxMpGh8BRCYsHRBxUjM1JygpLS4RY0Q1MkY5OisrPi/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIxEBAQEBAAICAgMAAwAAAAAAAAERAhIhAzETQSJRcVJhkf/aAAwDAQACEQMRAD8A2dRRmKfQeIQhCAQhHDQjijEAjhCRkRwhDQhCEgI4o4BCOEBQjkxjbTro6b032urqQQhCEoIo4QFCOKAQhCAQhCAo6jhAUIRwFCOECm4rgTFNsncVwigShcjHAlcLijkDuOKECUciI5A4QEJGhHFHAIQhAczsCN+jOzG1LqEA7EAaidu9j7hMGSzc1XGqcKVYtlLuG20j3YS772dQmOv1/rpz+/8AEYQimnMQhCUEIRQCFwhAIXCKA7hcULlDuFxQuA7hFcJRTcVwhK5iFxQhdO44oQJXHchHCpAx3IwkE7juQElAlARQkaShCEgcIoxIuHLuM5WjY8XEG9eN2A3NU6kMCP8AKZSBNvnWuEH94Tn3fr/XTiff+NRFGRCdGMKEIoQQhCVBFCKA4ooXKycJG4XKHcJGFwJQkYQKyYrlOuGubxz1dcdzH1R65MXV9xgyjXDXGLq+4XKQ8eqMNXXHcp1Rh4xdWgyVynVHqkxdXAx3KA0YaTF1eDGDKQ0YaZxZVwkhKQ0sUyVuLAJu+PQLww/vKPrNNhFsPiPrMj2ozuj8LiXYO7lh6Kgr984fJ1nUduOdlYpEiZIiVsZ2jlYZkbkS0iWlxirLiuVFoaprGdWExXKdUNUuGrbiuVaoapcTVtxXKtcWqXE1dcVyrVFqjE1fqilOqEYaxrhrlWqGqdGFmuPXKrhqkVbrj1ynVGDAt1SWqUXHcguDRhpTcdyC7VHqlVx3CxaGkg0qBjBkrcXBpINKQZIGYqxcplqmUpLVmOq68xtwtZ9tqK9PgOgnS8x4LHmxjIyguinQ3QrqAuviJzeX+tP+H/4idRg/5Y/3TPF1dz/Hrkz/ANcZxKUZiPNjxg3M1zz0fH1scfk5yqiZAtBjIEzvHDqGWkS0iTIkzcYqZaR1SJMjcM1PVDVK7iuaYW6otUquK4FuqGqVXC5RbqilVxwKdUWqRuK5UT1Q1SFwuBZrhrkLhcirNceuV3C4FoeGqV3JAyCeuSDyu4wYVYHkg8qBm05Lyl+KchSAq1rYnoD0A8yamOrJNrfM25GGHjDze8/9njgU5MZBQVYuyva9+omgUzE6nU2N3m83KvV5fiNzEVpyntHmyniAcRfQEUeFvCW1tZ2PqoPwnL5OvGO3xTa9OfIDkJU2PD5eQ8p1PC/8sfg08M5XmyF0BJ1BvECwG1jar9CPuntvBZAeGK73TbUfPaeK9b6v9PZ1xkln9uY41tzNZkebPiMLE9O9WWQAfG2v8JqeJ8Lulg6SBqU2rWqtamhdaq+Kmen4rPpw+VWzypnjYyBM9MeXqgvIl5EmRJm4xUi5kS5kSYiZqMVLWZH3hkSYrlZT94YveGRuK4E9ZhrMruFwmrNZhK7hKK7hchcJNMSuO5XHGmJwkbhcmricJG440xKSldxxq4sjuViSk1cTBm99n+Ztw6OygEErY+Fjb7xNAJs+Dr9HckgeIdie6eU5fJ75x0+P11rfc65iXDY2RQSpJO13o1jtOWBnRc8QDiWAP6o8++E19JzSmc/imR0+W7U8i6lZfMEfeKnn3NMBwZjj1N0B3Ym7G5s/CeggzjfbgD9IQna8A/8AsyiT5ZsdPgvvEeSuQ6NYJ1AAsNQ6jsev2p79yhFx8H4B2Yk+bEncz5/4B9OPBXfK4/HDX33PdODzqeAYEgG3AA6mjqqp5fH3r1ddbzI5nin3MwmNmh1ksr2ZXixtkYIgtiaA9Z6eZkeXq7UmwPo95pIW6s7AnyF9flMUmb/nuYY1TCPEVUqxJJvsTR/av/IJzpM6fH1bNrl8nMlwEyNwJkZ0c6ZMjcRMRM1rJmRuFxS6zh3FcRMRMaiVxXFcLl0w7hFcI1MV3DVOu4v2HddRx5FYAWqsCrH0J6A/nac1m5e+NwmRGUsdIsHc3W3n8pifJz19V0vx9c/cYuqGqbfnPIMnCUchUqxpSp60LOx3A/hKOUcofi3KYtPhFksaA7DoI8+c39Hh1uMC4XM7m/K24XJ7tyrHSGBU2KP0O0w0AveWdSzYl5suUrjBmZl4TUDkRaUUSPKzQ37zDknWrebDDR3M7lfKMvEhjhS9FXZA69gT1MxM2B02yIy3dalK3XWr6x5TcPG5qFyQMjcAY0xO5suHauGJ/b3+QQzWibXh2I4alJFv2JHbf6D8Jju+m+J7bjnY/wDFkf2mwgfND+flOXVp1PPHP6X1OxwHrtupnO8Nwr5G041J8/Qes5/Hcjp8k2+lStOQ9uT/AE+Gq/qB16f12XzntKeyyPiCsArDowFH5gdZ5P8AyrcuXh+MxY1JZRgU79d8uTyEx13OvUdPj4vN1pOHP9Dgv/u5hXp/QX++et8ud/coUR2JOYDZmKAowAfr4r6X5V2s+X8k4BuJXhcKuqF82fxOaoKvDt8SaHTzAnv/ACrhBhxKgOo9WegC7d2IHecerj0fp5s7GzfXve2/wm+9mMWnXxLWFQEDyJqzfwG/zm+5j7N4cgZlBR2s6gSRqO9lTt1mo56h4fhF4dFYg3qYDahRYmulkzpe51PGfdcZzZdv05njOKOR2yHudvQdh90xiZmcNy7LlRnxozKt2R6bkDzPoJW/BZQCTjcBftEowA+Jqd+bJ6jzdTq+6xSZEmSkZthEtEWkjFKYiTC44pdTBcVx1CNTEdURaShLpiGqEl8oRqY9neRyY1arANGwSAaI7jyMiW7SxthPnPoqcmBHoOitX9oBhuKOx9I04REYuiKrEBSQoB0r0G3Yfw8oi8ZzRpjVc/5CnFLZsOoOlhW57KwPUX8Jy/BeyGc5VXIAqHdmVlagBdV5npO0fjQCAe8yFyg9DNz5euZkZvxy3a1rez+MYjiQnda1dz5XXWa3hfYjGCfeZGbbwhQEo11N3c6kbyZF7STvqfVLzzfuMDkvLV4TCMasW31EmhbEC6HYbTl/bfmqvXDqoYqQxfbwnfwj8LnZ5VFEeYqc7xfsfjdPC7K5ay5txW/h02Ntxv6S8dTy3o65/jkefhZu+UezWbiU1qVVLoFyRfmQAN6+U3GD2KZWVnyIyggsulvEARa3flOsxPVBRS9qFCuwA8p06+b/AIuXPw/2x+C9n+Hxoq+6Ryo3Z1DMT5m5qvaPkajEP0fGx8eplT9q9wPKz0A2v0nUIa6zE4jjgrUJw87PdrvOJfUYL8kTJmOXLZ+xSg1uq1Zrfv09JncJyzFhBGNAtmzuST8STJpmDHrufpLw1ACxceWwzKAK2E8p/ld9m82fKnF46KJi0MPFrBDO5IoVVHz7T1N8o6DcnsO0xuYcvXiMbY8msK4ptDFSR3Fjz6ST1dXXnf8AI6iHhWDp4zkcoWX7ShcWrQT2Brp3+E9LdpRwvLcWJdOJNIGwssaFKKUkkgeEWO5EsyYGHTeTpZUhmrrK+H3Zje3T4/GSxKa8QlioF6TGVrYNlGwA37bbxq9ynJ6yhGYPtuPpLtTGl4j2NxkswyutmwCAQL8z3E5HmfLX4fJ7txZO6lTeoWQCPuO07ri+N0u2ME2W1bnoCBsPS5Tx/LE4nTlLurovQUQa36ETvz8t325dfFMeemKjI8Tx+PEFL8PxIF+MlkXSN/s+A23oalz814VQP6DjTfWhj2uj5en4zp+fly/DVUUWTnfBL1x8UD08Rxjf122mDh9pOG1U+PIB5rmQkfI4xfbuI/Pyn4az4qlGT2i4D9VOIvtqfEBfrSnvMfhvaPhumRHJ7aMiD42GQ/WPzw/DWfUKlQ5/wRGycSf8eHr6bRZefcGAKx8SSf28VD56Zfz8n4auhMP+f+H/AOxn/wDWxf6IR+bk/DXsT8SL26CTHFBxVzlHy5iBqZF+Gqj+EyOFzsvcE+dEzyXqPX41vmzEHSdpHM19D0H3zU5uKZjZ/BT/ABlI40gXZ289NXV9xJ5RfGr+L4d8tKoZd/gSB3H4TM4bA+M+NtQ7Hfp6zW5ebOQDqbpYo19JR+nOdmJO3RmvrXYmZ8v+mvG/26JeP3rt0/PpKn5t7sUxDOfIiq7TQJlJsnTsQNgG79yAa6jrI4c25onu25Cjw3ttq8vSPOnhHRYOaDUA428wCfoJmHmmPsWP+Fv3gTkX41a1a128q7kDqxPn5TD/AJ0Rxp1gk9td7/3Qfl0k/J0vhHavz3Enhc0fIsgP3FrmLg50jNrVMjL+rsoX5Wd5zGfMMmHRQANWANNrf8ROb4HmT8I2TWpYb+FB1cFe/wAD+MeXV+jw5n29Q4zmxZKQFT5tpO3wBnN5eY52OwX7QHQjw3vuT5d5oF9osjM49y4CKjA7U+pQdIGg+IE11PTtMocwys7gYn0pvashLCiSAvuj02++Szq/a83nl1fDcQq4cj5nAYE6DdaVIFC++4M0A9sEwF/fl2Chq0lb2F732qaPiPahBmXA2DJkZkDhW93QBF7+BSOn0mGM/C61R+CYM5YBmZSLCkm6axsD0E1JZPcZ9W10HLf5TeGJL5G0n7IUq9jyYnfaqmx5d7dF3cjG7pqpHtVRl7EP3Y3sBfkaM2fKPZ3hseNWbhsRYgGioYLe4Asbn1mbxXK8br4EVGAOhlGkDyBC1tN5c9MW861PMefcQysqsEYBq0bljW3W7qu3nN7h52Ci2j3S39nr0Y9ZwWPmLjV70FGVq0s42IbSdVbAbbdZc3Hj/psWJ66WJ3+U529R08eb+nXZvapEOgpkvfojlfTxAER4vaLHkXUofax9hhuOo8VX8pw3E53rTrpiaA16CNQAFAnf+JkOYNxHClBlXJ4jQbsCBR2Hb81H8qZzHcZ+catlRh6nSB9bmOOY5Ap8ILX51t67bTk05it6tZLUdupIqwNJ2G3eZ/D8S74kyqp0uiuACLAYA0RdEgHznPryl3XTmc2fSfErmfKMh0gUwbx771Vbb7fumwTmGVVWkVq2YF6JG3eqBmlfjQGIZwp/aBA9N+g895B+I7llPwda+ss66LzzftmZ8eUu7q5Gtg1HQdFCgqnSdq71frM4cz4gNr8BNaa8RWrB2UtV7dauaPDxbObBsdqNj7xM7hs2+9/P90eXSeHDXcy5fkzNqyFzsBQbrQAskvZY1ufjMD+YUG+hwb7MPv8At+s6fK46qdvOUu4Pej9ZZ31U8OXPN7PFiKsdNtS7+v2pbxXItWNMShEKWS+m3fUbAdgdwO02Gbj6Puxu30+6JMh2sk+pJ6+k15dJ4ytJ/wAJZOzqR8G/hJt7J5VFpR2o9f8ATN03Gb0D/v8ACUZeY+tfZ7+sm9HhGj/4Y4j/AMv/ADN/phN4vM28/Pv6/GEvlWfxxy387KNIfiAGsjTrc0p7t2vfvKM3MxRC8QNmBFZAbX1s79D06XOTZD+z6mpGh0NfMfSp0xz2uuwcwxZGKjjCgCkh8lgMSASuwsd+3bvMTmPNTiyaV4kZFP6yMSvbre4+7tOdrahpHwkhi+EZDa2h5oSN8g2rvv8ALbeJOZ6hYb5Wb+6prTgHciI4KNgj8f4SZD23A5mVF+8r4kyxuaeC3y+Hfpuxuh0vfp9ZpDhBPUfjAYR0tfz8pMh7b/h+Mwur6c+gql+Pw6twNCgEljvdAdjFl45cao3v0JYXpTUWXr9rbwn0O+80a41vt9/+0s0p0NS/xPbc4+dsB/W0KPc+XlLRz1tv6Zje/wBoi/nc5/Qvn8rjoDv8pMPbeZeeagDkfJko2ilyFBBJ6L8ehm7X26V8Xu3xIu27VTlgbBLdx5jr6icSSp7/AJ+MahfOvkYX29L5P/KBwqEjiAEBWxpR3bVdG7vYjf5eswOe+2PC5MuvAcgKhlHg2vcB1s7A3fY15Tg3QHfUR8BGmMabLn5LL6JbHpGD+U7UqoyMB7oozDZveVWsHsPSa3k3t7k4ZNDtkzbsS7tryE6aXxsfsggbfGcQMa/2ifWv95EBezH8JfJMZ/Dc9BctxGp2Z1YuQrsyg26sW8Vkhd789t5t8/tVw9FcXD6Fav6pUxtsQb1ruOldPrOYCr3b6SQYect60ksdD/xNwoIJ4XJkbrqfPkSmB2C6DuO9neZ/O/abBnxr7s5cTgC/Dtdgm/GdW4O/XecbqB7fPpGFHkPLcyb9YvtuG50mQhWy5Fs1agIqD9tVFEdK69N4fz+MYGJcuRlWgNL5NPh2Gxq+nlNKy3XavKt/jI6Cdg1fdJZKbW7y+0RyXTuD1vUwP3iVNz/IEKM1hioYkux2+J9fpNQVA/IgGA6iJJP0bXS5Oc4cSEY3LklSKXIoRdPiUm6Juu3btNfk9pHDDQW01vsAb9POaq/T6SssPKXIntvh7SZO2R+vm0mvtLmP/Ubbsb+k53WewiUsO34x4nt0i+1Db63cn9WkRhfQ2W3+6ZGT2nPUk+hKqKHrpA7zlWUnzEkQfP6kRiy2OjPtMas6f/ePo0b+0Cn7V/It++cvR/W39KlhF14fz90Ym10R54n7Z+f/AOIpz1Hy/ExxhtZmXhsC1pZ2v5V94mO3DLfh1EXvZA+UIS3qoaY0PUNW+4I61ttQha1sKP5PlFCTa0Cvqa89pSyA7Wb+UIQHjwXt9TArVnTt8ekIQAAEg18tqgR5j7jUISBopJArc33k8ildiPx2jhKIO5UbASWJvMCOEn6P2sLDsfwj1RQmaqXvNuv1i0g+vyhCA1RdyB+fgZEjEVvx3fmumu9DTcISilyo3o9/jIBlPQGEJZ9ImhDbV69ZJcPTyPe4QkIhrHn+EiAD07/GoQlCIC9hJEhuo+HnCEBNjG2xPnvE6U32fncIRKALe1fAjr+MsbCR1+W8IRvsVhyPz5S1AW2Fgj4fjCEVInpI7whCRX//2Q=="
          style={{
            color: "#fff",
            marginBottom: "10px",
            width: "100%",
            margin: "",
            objectFit: "contain",
          }}
        />

        <Card.Body>
          <Card.Title>Mission Name : {mission_name}</Card.Title>
          <span>
            Flight Number :{" "}
            <span style={{ color: "red" }}>{flight_number}</span>
          </span>
          <br />
          <span>
            Launch Date :{" "}
            <span style={{ color: "lightgreen" }}>{launch_date_local}</span>
          </span>
          <Card.Text>Details : {details} </Card.Text>
          <Button
            variant="success"
            style={{
              color: "green",
              backgroundColor: "#fff",
              borderRadius: "10px",
              marginTop: "10px",
              cursor:"pointer"
            }}
            onClick={DETAILSHANDLER}
          >
            See More
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LaunchesCard;
