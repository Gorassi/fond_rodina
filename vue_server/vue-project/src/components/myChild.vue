<script>
    export default{
        data(){
            return {
                currentDate : "00:00",
                myHours: 0,
                text: '',
                informs: ['baths attacks people', 'sleeping is usefull', 'look at Robinson']
            }            
        },
        methods: {
            updateDate(){
                this.myHours = new Date();
                this.currentDate = this.myHours.getHours() + ":" + this.myHours.getMinutes();
                            },
            addNews(){
                this.informs.push(this.text);
                this.text = '';
            },
        },
    }

</script>

<template>
    <h2>It is text into my oun Component!!!</h2>
    <h4> today is 22 august !!!</h4>
    <h4> Time : {{currentDate}}</h4>
    <button @click='updateDate'>Update date</button>
    <br>
    <input v-model='text' placeholder='input news'>
    <h5>text: {{text}}</h5>
    <br>
    <button @click='addNews'>Add news</button>
    <br>
    <h4>Current news:</h4>
    <ul>
        <li v-for='inform in informs'>{{inform}}</li>
    </ul>
    <h3>IDBC</h3>
    <?php
        $db = mysqli_connect('localhost','username','password','database_name')
        or die('Error connecting to MySQL server.');
    ?>
</template>

<style>

</style>

