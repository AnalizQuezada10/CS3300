$(document).ready(function() {
    function fetchTemperature(){
        $.ajax({
            url: 'https://open-meteo.com/',
            data: {
                latitude: 40.7128,
                longitude: -74.0060,
                current_weather: true, 
                temperature_unit: 'Fahrenheit',
            },
            success: function(response){
                let temperature = response.current_weather.temperature;
                $('#temperature').text(temperature +'°F');
            },
            error: function() {
                $('#recipes-list').text('Error finding temperature');

            }
        }); 
            }
            function fetchRecipes(){
                $.ajax({
                    url: 'https://localhost:3000/recipes',
                    method: 'GET',
                    success: function(data) {
                        $('#recipes-list').empty();
                        data.forEach(function(recipes) {
                            $('#recipes-list').append(
                                `<li><strong>Name:</strong> ${recipe.name} <br><strong>Ingredients:</strong $(recipe.ingerdients)</li>`
                            );
                        });
                    },
                    error: function(){
                        $('#recipes-list').text('Error finding recipes');

                    }
                });

            }
            }
        $('#new-recipes-form').submit(function(e)
    e.preventDefault();
    const newRecipe = (
        name: $('#name').val()
        ingredients: $('#ingredients').val()
    };
    $.ajax({
        url: 'https://localhost:3000/recipes',
        method: `POST`,
        data: JSON.stringify(newRecipe),
        contentType: 'application/json',
        success: function() {
            fetchRecipes();
            $('#name').val('');
            $('#ingredients').val('')
        },
        error: function() {
            alert('Error adding the Recipe');
        }

        });
        fetchRecipes();
        
    });

        