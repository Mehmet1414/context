import Card from "../components/Card";

const products = () => {
    const products = [
        { 
          price: 29.99,
          name: "Ürün 1",
          image: "https://picsum.photos/200",
          size: "S",
          id:1
        },
        {
          price: 39.99,
          name: "Ürün 2",
          image: "https://picsum.photos/201",
          size: "M",
          id:2
        },
        {
          price: 49.99,
          name: "Ürün 3",
          image: "https://picsum.photos/202",
          size: "L",
          id:3
        },
        {
          price: 19.99,
          name: "Ürün 4",
          image: "https://picsum.photos/203",
          size: "XL",
          id:4
        },
        {
            price: 59.99,
            name: "Ürün 5",
            image: "https://picsum.photos/204",
            size: "S",
            id:5
          },
          {
            price: 69.99,
            name: "Ürün 6",
            image: "https://picsum.photos/205",
            size: "M",
            id:6
          },
          {
            price: 79.99,
            name: "Ürün 7",
            image: "https://picsum.photos/206",
            size: "L",
            id:7
          },
          {
            price: 89.99,
            name: "Ürün 8",
            image: "https://picsum.photos/207",
            size: "XL",
            id:8
          },
          {
            price: 99.99,
            name: "Ürün 9",
            image: "https://picsum.photos/208",
            size: "S",
            id:9
          },
          {
            price: 109.99,
            name: "Ürün 10",
            image: "https://picsum.photos/209",
            size: "M",
            id:10
          },

      ];


  return (
    <div className="container d-flex flex-wrap justify-content-between align-items-center gap-5 pt-5" >
        {
            products.map((product)=> (
                <Card product={product} key={product.id}/>
            ))
        }
    </div>
  )
}

export default products