import { html, css } from 'https://unpkg.com/rplus';

const style = {
  card: css`{
    text-align: left;
    background: black;
    color: white;
    width: 80%;
    height: 250px;
    max-width: 600px;
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 10px;
    position: relative;
  }`,
  nameContainer: css`{
    position: absolute;
    bottom: 1rem;
  }
  @media (max-width: 500px) {{
    bottom: unset;
    top: 39%;
  }}`,
  attributeContainer: css`{
    position: absolute;
    right: 20px;
    bottom: 1rem;
    text-align: right;
  }
  @media (max-width: 500px) {{
    right: unset;
    text-align: right;
  }}`,
  name: css`{
    font-size: 1.5rem;
    font-weight: 100;
  }`,
  icon: css`{
    margin: 0 0rem;
  }`,
  manufacturer: css`{
    font-weight: 100;
    font-style: italic;
  }`,
  attribute: css`{
    font-weight: 100;
    font-size: 1.1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  @media (max-width: 500px) {{
    font-size: 1rem;
    flex-direction: row-reverse;
  }}`,
};

const backgroundStyle = url => css`{
  background: black url("${url}");
  background-repeat:no-repeat;
  background-position: center center;
  background-size: contain;
  width: 100%;
  height: 100%;
}
@media (max-width: 500px) {{
  height: 40%;
}}`;

export default ({ data }) => html`
  <div className=${style.card}>
    <div className=${backgroundStyle(data.image)}>
      <div className=${style.nameContainer}>
        <h2 className=${style.name}>${data.name}</h2>
        <h3 className=${style.manufacturer}>${data.manufacturer}</h3>
      </div>
      <div className=${style.attributeContainer}>
        <h3 className=${style.attribute}><p>${data.crew + data.passengers}</p><p className=${style.icon}> 🙎‍♂️</p></h3>
        <h2 className=${style.attribute}><p>${data.max_atmosphering_speed}</p><p className=${style.icon}> ⚡️</p></h2>
        <h3 className=${style.attribute}><p>${data.cost_in_credits}</p><p className=${style.icon}> 💰</p></h3>
        <h3 className=${style.attribute}><p>${data.consumables}</p><p className=${style.icon}> ⏱</p></h3>
      </div>
    </div>
  </div>
`;