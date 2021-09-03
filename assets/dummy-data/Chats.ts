export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Vadim',
		imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
	}, {
		id: 'u2',
		name: 'Savennah ❤',
		imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
	}],
	messages: [{
		id: 'm1',
		content: 'How are you, Savennah!',
		createdAt: '2020-10-10T12:48:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}, {
		id: 'm2',
		content: 'I am good, good',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Savennah ❤',
		},
	}, {
		id: 'm3',
		content: 'What about you?',
		createdAt: '2020-10-03T14:49:40.000Z',
		user: {
			id: 'u2',
			name: 'Savennah ❤',
		},
	}, {
		id: 'm4',
		content: 'Good as well, preparing for the upcoming launch.',
		createdAt: '2020-10-03T14:50:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}, {
		id: 'm5',
		content: 'How is your life going? 🥰',
		createdAt: '2020-10-03T14:51:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}, {
		id: 'm6',
		content: 'Nothing great but nothing worst. 😜',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Savennah ❤',
		},
	}, {
		id: 'm7',
		content: 'btw, ur..',
		createdAt: '2020-10-03T14:53:00.000Z',
		user: {
			id: 'u2',
			name: 'Savennah ❤',
		},
	}]
}

