import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog';
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { addEvent } from './ClientRequest';

const initialState = {
	venue: '',
	desc: '',
	details: '',
	loc: '',
	startTime: '',
	endTime: '',
	url: '',
	fileName: '',
	startTimeError: '',
	endTimeError: '',
	fileError: ''
};

class AdminPanel extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFileClick = this.handleFileClick.bind(this);
		this.validateInput = this.validateInput.bind(this);
	}

	handleFileClick(e) {
		console.log(e.target.value);
		console.log(this.fileInput);
		this.setState({ fileError: '' });
		this.setState({ fileName: e.target.value.split(/(\\|\/)/g).pop() });
	}

	validateInput() {
		let valid = true;
		console.log('validating');
		console.log(this.state.startTime);
		if (this.state.startTime === '') {
			console.log('starttime error');
			this.setState({ startTimeError: 'This field is required' });
			valid = false;
		}
		if (this.state.endTime === '') {
			console.log('endtime error');
			this.setState({ endTimeError: 'This field is required' });
			valid = false;
		}
		if (this.state.fileName === '') {
			console.log('file error');
			this.setState({ fileError: 'Picture is required' });
			valid = false;
		}
		return valid;
	}

	handleSubmit(event) {
		console.log(this.state);
		if (!this.validateInput()) return;
		event.preventDefault();
		const request = new FormData();
		console.log('file: ', this.fileInput);
		console.log('file: ', this.fileInput.files[0]);
		request.append('file', this.fileInput.files[0]);
		request.append('venue', this.state.venue);
		request.append('url', this.state.url);
		request.append('description', this.state.desc);
		request.append('details', this.state.details);
		request.append('loc', this.state.loc);
		request.append('start', this.state.startTime);
		request.append('end', this.state.endTime);

		addEvent(request);
		this.setState(initialState);
		console.log('event', event);
	}

	handleChange(event, name) {
		this.setState({ [name]: event.target.value });
	}

	handleTime(event, name) {
		// const time = event.format('YYYY-MM-DD H:mm');
		console.log('handling time: ', event);
		if (event == null) {
			console.log('changing');
			this.setState({ [name]: '' });
			return;
		}
		if (name === 'startTime') {
			this.setState({ startTimeError: '' });
		} else if (name === 'endTime') {
			this.setState({ endTimeError: '' });
		}
		const time = event
			.toISOString()
			.substring(0, 19)
			.replace('T', ' ');
		console.log(time);
		this.setState({ [name]: time });
	}

	render() {
		return (
			<div className="app">
				<h1>Admin Panel</h1>
				<h2>Create a new event:</h2>
				<ValidatorForm onSubmit={this.handleSubmit}>
					<TextValidator
						fullWidth
						floatingLabelText="Enter venue"
						name="venueInput"
						value={this.state.venue}
						validators={['required']}
						errorMessages={['This field is required']}
						onChange={e => this.handleChange(e, 'venue')}
					/>
					<TextValidator
						floatingLabelText="Enter URL"
						fullWidth
						name="urlInput"
						value={this.state.url}
						validators={['required']}
						errorMessages={['This field is required']}
						onChange={e => this.handleChange(e, 'url')}
					/>
					<TextValidator
						fullWidth
						floatingLabelText="Enter Description"
						name="descriptionInput"
						value={this.state.desc}
						validators={['required']}
						errorMessages={['This field is required']}
						onChange={e => this.handleChange(e, 'desc')}
					/>
					<TextValidator
						fullWidth
						floatingLabelText="Enter Location"
						name="locationInput"
						validators={['required']}
						errorMessages={['This field is required']}
						value={this.state.loc}
						onChange={e => this.handleChange(e, 'loc')}
					/>
					<TextValidator
						floatingLabelText="Enter Details"
						multiLine
						fullWidth
						name="detailInput"
						validators={['required']}
						value={this.state.details}
						errorMessages={['This field is required']}
						onChange={e => this.handleChange(e, 'details')}
					/>
					<div className="fileInput">
						<label htmlFor="fileInput">
							<RaisedButton
								label="Choose a picture"
								labelPosition="before"
								containerElement="label"
							>
								<input
									ref={input => {
										this.fileInput = input;
									}}
									type="file"
									onChange={this.handleFileClick}
									style={{ display: 'none' }}
								/>
							</RaisedButton>
							<span className="fileLabel">
								{this.state.fileName}
							</span>
							<span className="errorLabel">
								{this.state.fileError}
							</span>
						</label>
					</div>
					<br />
					<DateTimePicker
						floatingLabelText="Enter Start Time"
						id="startTime"
						value={this.state.startTime}
						onChange={e => this.handleTime(e, 'startTime')}
						errorText={this.state.startTimeError}
						DatePicker={DatePickerDialog}
						TimePicker={TimePickerDialog}
					/>
					<DateTimePicker
						floatingLabelText="Enter End Time"
						id="endTime"
						value={this.state.endTime}
						errorText={this.state.endTimeError}
						onChange={e => this.handleTime(e, 'endTime')}
						DatePicker={DatePickerDialog}
						TimePicker={TimePickerDialog}
					/>
					<br />
					<RaisedButton type="Submit">Submit</RaisedButton>
				</ValidatorForm>
			</div>
		);
	}
}

export default AdminPanel;
