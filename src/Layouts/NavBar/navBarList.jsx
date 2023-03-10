import FontAwesomeIcon from "react-fontawesome";
const NavBarList = ({ items }) => {
  const getItem = (item) => {
    let itemList = null;
    switch(item.type){
      case 'logo':
        itemList = <img src="/logo-white.svg" className="h-16 min-w-[250px]" alt={item.name}/>
        break;
      case 'language':
        itemList = <p className="border-white rounded-[3px] py-[3px] px-[5px] border-[1px] border-solid hover:bg-white hover:text-black">{item.name}</p>
        break;
      case 'icon':
        itemList = <FontAwesomeIcon name={item.name} size="lg" className="hidden lg:block"/>
        break;
        case 'icon2':
        itemList = <FontAwesomeIcon name={item.name} size="lg" className="lg:invisible visible"/>
        break;
      default:
        itemList = <p className="hidden lg:block">{item.name}</p>
        break;
    }
    return itemList
  };
  return (
    <ul className="flex gap-7 items-center">
      {items.map((item) => {
        return <li key={item}>{getItem(item)}</li>;
      })}
    </ul>
  );
};

export default NavBarList;
