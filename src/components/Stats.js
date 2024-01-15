export default function Stats({ items }) {
    if (!items.length) {
      return (
        <p className="stats">
          <em>Start adding some items to your packing list 🚀</em>
        </p>
      )
    }
    const numItem = items.length;
    const countOfPacked = items.filter((item) => item.packed).length;
    const percentagePacked = Math.round(countOfPacked * 100 / numItem);
  
    return <footer className="stats">
      <em>{percentagePacked === 100 ? "You have everything! Ready to Go ✈️" : `💼You have ${numItem} items, and you already packed ${countOfPacked} (${percentagePacked}%)`}</em>
    </footer>
  }