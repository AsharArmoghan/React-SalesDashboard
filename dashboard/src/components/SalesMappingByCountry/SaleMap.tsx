import classes from './saleMap.module.css';
// import Map from './Map/Map';
const SaleMap: React.FC = () => {
	return (
		<div className={classes.main_container}>
			<div className={classes.world_map}>{/* <Map /> */}</div>
		</div>
	);
};
export default SaleMap;
