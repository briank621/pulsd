import React, { Component } from 'react';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

class DatabasePanel extends Component {
	constructor(props) {
		super(props);
		this.state = { events: [] };
		this.loadData = this.loadData.bind(this);
	}

	componentWillMount() {
		this.loadData();
	}

	loadData() {
		fetch('https://b339214c.ngrok.io/api/events', {
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log('data', data);
				this.setState({ events: data });
			});
	}

	render() {
		console.log(this.state);
		return (
			<div>
				<h2>Database</h2>
				<RaisedButton
					label="Refresh Database"
					onClick={this.loadData}
					primary
				/>
				<Table selectable={false}>
					<TableHeader>
						<TableRow>
							<TableHeaderColumn>ID</TableHeaderColumn>
							<TableHeaderColumn>Venue</TableHeaderColumn>
							<TableHeaderColumn>Description</TableHeaderColumn>
							<TableHeaderColumn>Location</TableHeaderColumn>
							<TableHeaderColumn>Details</TableHeaderColumn>
							<TableHeaderColumn>Start</TableHeaderColumn>
							<TableHeaderColumn>End</TableHeaderColumn>
							<TableHeaderColumn>URL</TableHeaderColumn>
							<TableHeaderColumn>Posted</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody>
						{this.state.events.map(event => (
							<TableRow>
								<TableRowColumn>{event.id}</TableRowColumn>
								<TableRowColumn>{event.venue}</TableRowColumn>
								<TableRowColumn>
									{event.description}
								</TableRowColumn>
								<TableRowColumn>{event.loc}</TableRowColumn>
								<TableRowColumn>{event.details}</TableRowColumn>
								<TableRowColumn>{event.start}</TableRowColumn>
								<TableRowColumn>{event.end}</TableRowColumn>
								<TableRowColumn>{event.url}</TableRowColumn>
								<TableRowColumn>{event.posted}</TableRowColumn>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		);
	}
}

export default DatabasePanel;
