import React from 'react';
import { List, ListItem } from 'material-ui/List';

const links = [
	{
		page: 'Facebook',
		url: 'https://www.facebook.com/An-example-page-613534065661353/'
	},
	{
		page: 'Eventbrite',
		url: 'https://www.eventbrite.com/myevents'
	},
	{
		page: 'Pinterest',
		url: 'https://www.pinterest.com/briank621/pulsd/'
	},
	{
		page: 'Tumblr',
		url: 'https://www.tumblr.com/blog/brian621'
	},
	{
		page: 'Twitter',
		url: 'https://twitter.com/briank621'
	}
];

const WebsitePanel = () => (
	<div>
		<h2>Website Links</h2>
		<List className="list-horizontal-display">
			{links.map(link => (
				<ListItem
					primaryText={link.page}
					containerElement={
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={link.url}
						>
							{link.page}
						</a>
					}
				/>
			))}
		</List>
	</div>
);

export default WebsitePanel;
