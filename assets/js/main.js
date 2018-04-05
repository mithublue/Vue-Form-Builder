var app = new Vue({
    el: '#app',
    data : {
        model: {
            name: 'John Doe',
            email: 'john@doe.com',
            phone: '123123123',
            profession: 'Doctor',
            experience: 100,
            age: 78,
            about: 'I am john doe',
            type: 'engr',
            todo: [
                {
                    a: 'text data',
                    b: 'textarea data'
                },
                {
                    a: 'text data 2',
                    b: 'textarea data 2'
                }
            ]
        },
        schema : [
            {
                model: 'name',
                type : 'input',
                inputType : 'text',
                label : 'Name',
                maxlength : 50,
                placeholder : "User's full name",
            },
            {
                model: 'email',
                type : 'input',
                inputType : 'email',
                label : 'Email',
                maxlength : 50,
                placeholder : "User's email address",
            },
            {
                model: 'phone',
                type : 'input',
                inputType : 'number',
                label : 'Phone',
                placeholder : "User's Contact Number"
            },
            {
                model: 'profession',
                type : 'input',
                inputType : 'radio',
                label : 'Profession',
                options : {
                        engr : 'Engineer',
                        doctor : 'Doctor',
                        businessman : 'Businessman'
                    }
            },
            {
                model: 'experience',
                type: 'input',
                inputType: 'text',
                label: 'Experience',
                visible: function (model) {
                    return model.profession == 'doctor';
                }
            },
            {
                model: 'age',
                type : 'input',
                inputType : 'number',
                label : 'Age'
            },
            {
                model: 'type',
                type: 'select',
                label: 'Type',
                multiple: false,
                options : {
                    engr : 'Engineer',
                    doctor : 'Doctor',
                    businessman : 'Businessman'
                }
            },
            {
                model: 'about',
                type : 'textarea',
                label : 'About'
            },
            {
                model: 'todo',
                type: 'repeatable',
                label: 'Test Repeat',
                group: [
                    {
                        model: 'a',
                        label: 'A text',
                        type: 'input',
                        inputType: 'text'
                    },
                    {
                        model: 'b',
                        label: 'B textarea',
                        type: 'textarea'
                    }
                ]
            }
        ]
    }
});

var a = {
    name: {
        model: 'name',
            type : 'input',
            inputType : 'text',
            label : 'Name',
            maxlength : 50,
            placeholder : "User's full name",
    },
    email: {
        model: 'email',
            type : 'input',
            inputType : 'email',
            label : 'Email',
            maxlength : 50,
            placeholder : "User's email address",
    },
    phone: {
        model: 'phone',
            type : 'input',
            inputType : 'number',
            label : 'Phone',
            placeholder : "User's Contact Number"
    },
    profession: {
        model: 'profession',
            type : 'input',
            inputType : 'radio',
            label : 'Profession',
            options : {
            engr : 'Engineer',
                doctor : 'Doctor',
                businessman : 'Businessman'
        }
    },
    age: {
        model: 'age',
            type : 'input',
            inputType : 'number',
            label : 'Age'
    },
    type: {
        model: 'type',
            type: 'select',
            label: 'Type',
            multiple: false,
            options : {
            engr : 'Engineer',
                doctor : 'Doctor',
                businessman : 'Businessman'
        }
    },
    about: {
        model: 'about',
            type : 'textarea',
            label : 'About'
    },

}