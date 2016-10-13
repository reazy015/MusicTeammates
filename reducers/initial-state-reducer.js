// export default function(){
// 	return [
// 		{
// 			id: 1,
// 			first: 'Dave',
// 			last: 'Davison',
// 			city: 'Los-Angeles',
// 			instrument: 'guitar',
// 			thumbnail: 'some photo use to be here'
// 		},
// 		{
// 			id: 2,
// 			first: 'Mike',
// 			last: 'Miker',
// 			city: 'Los-Angeles',
// 			instrument: 'guitar',
// 			thumbnail: 'some photo use to be here'
// 		},
// 		{
// 			id: 3,
// 			first: 'John',
// 			last: 'Johnes',
// 			city: 'Los-Angeles',
// 			instrument: 'guitar',
// 			thumbnail: 'some photo use to be here'
// 		},
// 		{
// 			id: 4,
// 			first: 'Dave',
// 			last: 'Jhones',
// 			city: 'Los-Angeles',
// 			instrument: 'guitar',
// 			thumbnail: 'some photo use to be here'
// 		},
// 		{
// 			id: 5,
// 			first: 'Dave',
// 			last: 'Jhones',
// 			city: 'Los-Angeles',
// 			instrument: 'guitar',
// 			thumbnail: 'some photo use to be here'
// 		}

// 	]
// }

export default function(){
	let users = [];

	for(let i=1; i<28; i++){
		users.push({
			id: i,
			first: 'Dave',
			last: 'Mayers',
			city: 'New-York',
			instrument: 'guitar',
			thumbnail: '',
		})
	}

	return users;
}