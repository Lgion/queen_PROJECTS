

export default ({ title, price, description, features }: { title: string; price: string; description: string; features: string[] }) => (
    <li className="">
      <h3 className="">{title}</h3>
      <p className="">{price}</p>
      <p className="">{description}</p>
      <ul className="">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="">
        Réserver
      </button>
    </li>
  );
