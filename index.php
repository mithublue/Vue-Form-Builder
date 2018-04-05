<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
</head>
<body>
<div id="app">
    <div class="card">
        <div class="card-header">
            Form
        </div>
        <div class="card-body">
            <vue_form_builder :model="model" :schema="schema"></vue_form_builder>
        </div>
    </div>

</div>

<script src="assets/js/vue.js"></script>
<?php include_once 'vue-form-builder.vue'; ?>
<script src="assets/js/main.js"></script>
</body>
</html>