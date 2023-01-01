
// extracting values of name and age and putting them inside 2 new variables, name and age    
<script type="text/javascript">
    
    const person = {
        name: 'Domenic',
        age: 21,
        gender: 'Male',
    };

function printDetails({name, age}) {
    console.log('The name is ${name} and they are ${age}');
}

printDetails(person);

</script>