import React from 'react';
import usersData from './users';
import UserList from './../app/userList/userList';
import { userService } from './../services/UserService';
import UserGrid from "./../app/userList/userGrid";
import Header from "./../app/partials/header";
import LoadingSquare from './loading';
import EmptyPage from './emptyPage';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false,
			users: [],
			searchResults: [],
			searchString: '',
			isLoading: false
		}
	}

	handleChange = (event) => {
		this.setState((prevState, props) => {
			return { selected: !prevState.selected }
		});
	}

	refresh = (event) => {
		this.loadUsers();
	}

	loadUsers() {
		this.setState({
			isLoading: true
		})
		userService.fetchUsers()
			.then((fetchedUsers) => {
				localStorage.setItem("users", JSON.stringify(fetchedUsers));
				
				this.setState({
					searchString: "",
					isLoading: false,
					users: fetchedUsers,
					searchResults: fetchedUsers
				})
			})
	}

	componentDidMount() {
		if (localStorage.getItem("users")) {
			
			this.setState({
				users: JSON.parse(localStorage.getItem("users")),
				searchResults: JSON.parse(localStorage.getItem("users")),
				searchString: ""
			})
		} else {
			this.loadUsers();

		}
	}


	search = (event) => {
		this.setState({
			searchString: event.target.value,
			searchResults: this.state.users.filter(el => {
				return el.fullName.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
			})
		})
	}

	renderContent() {
		if (this.state.searchResults.length === 0) {
			return <EmptyPage />;
		}

		return ((this.state.selected) ?
			<UserGrid items={this.state.searchResults} />
			: <UserList items={this.state.searchResults} />)
	}

	render() {
		return (
			<div>
				<Header handleChange={this.handleChange} isGrid={this.state.selected} refresh={this.refresh} search={this.search} searchString={this.state.searchString} isLoading={this.state.isLoading} />
				{(this.state.isLoading) ? <LoadingSquare /> : this.renderContent()}
			</div>
		)
	}
}
export default Home;

