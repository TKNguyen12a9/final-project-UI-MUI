import { Container, makeStyles, Typography } from "@material-ui/core"
import {
	Bookmark,
	List,
	ExitToApp,
	AddLocationAlt,
	Map,
	Home,
	Person,
	PhotoCamera,
	PlayCircleOutline,
	Settings,
	Storefront,
	TabletMac,
} from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
	container: {
		height: "100vh",
		color: "white",
		paddingTop: theme.spacing(10),
		backgroundColor: theme.palette.primary.main,
		position: "sticky",
		top: 0,
		[theme.breakpoints.up("sm")]: {
			backgroundColor: "white",
			color: "#555",
			border: "1px solid #ece7e7",
		},
	},
	item: {
		display: "flex",
		alignItems: "center",
		marginBottom: theme.spacing(4),
		[theme.breakpoints.up("sm")]: {
			marginBottom: theme.spacing(3),
			cursor: "pointer",
		},
	},
	icon: {
		marginRight: theme.spacing(1),
		[theme.breakpoints.up("sm")]: {
			fontSize: "18px",
		},
	},
	text: {
		fontWeight: 500,
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
}))

const Leftbar = () => {
	const classes = useStyles()
	return (
		<Container className={classes.container}>
			<div className={classes.item}>
				<Home className={classes.icon} />
				<Typography className={classes.text}>홈</Typography>
			</div>
			<div className={classes.item}>
				<Person className={classes.icon} />
				<Typography className={classes.text}>폴로잉포스트</Typography>
			</div>
			<div className={classes.item}>
				{/* <List className={classes.icon} /> */}
				{/* <AddLocationAlt className={classes.icon} /> */}
				<Map className={classes.icon} />
				<Typography className={classes.text}>맵으로 검색</Typography>
			</div>
			{/* <div className={classes.item}>
				<PhotoCamera className={classes.icon} />
				<Typography className={classes.text}>Camera</Typography>
			</div>
			<div className={classes.item}>
				<PlayCircleOutline className={classes.icon} />
				<Typography className={classes.text}>Videos</Typography>
			</div>
			<div className={classes.item}>
				<TabletMac className={classes.icon} />
				<Typography className={classes.text}>Apps</Typography>
			</div>
			<div className={classes.item}>
				<Bookmark className={classes.icon} />
				<Typography className={classes.text}>Collections</Typography>
			</div>
			<div className={classes.item}>
				<Storefront className={classes.icon} />
				<Typography className={classes.text}>Market Place</Typography>
			</div>
			<div className={classes.item}>
				<Settings className={classes.icon} />
				<Typography className={classes.text}>Settings</Typography>
			</div> */}
			<div className={classes.item}>
				<ExitToApp className={classes.icon} />
				<Typography className={classes.text}>로그아웃</Typography>
			</div>
		</Container>
	)
}

export default Leftbar
