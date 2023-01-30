export function dateFormat(date: string){
 const  dateTime= date.split('T');
 const date2 = dateTime[0].split('-')
 if(date=== undefined) return '-';
 return `${date2[2]}/${date2[1]}/${date2[0]}`;
}