const Discord = require('discord.js')

module.exports = {
    name: 'devitoes',
    description: "We dont kink shame",
    async execute(interaction) {

        const devitoes_gifs = [
            "https://media.gq.com/photos/55828ee31177d66d68d5395e/4:3/w_576,h_432,c_limit/blogs-the-feed-troll-foot-fallon-01.jpg",
            "https://imagez.tmz.com/image/f2/1by1/2012/07/23/f218646aad5f5d1495e3c8ed0c469fbd_xl.jpg",
            "https://lh3.googleusercontent.com/proxy/TDqKWtamzM3PPOyVPl_RNAi2qDBHOXvlNXOPrdQc4arYsyZgnFPgrk-7z3wz1eZAd070d14wIezLSlIfVTXI9PpnOY8jTDl9XSSLbygpp9jDkRa73ltHY1eFArLGYgiYLXUO_aeRbOzfvpzPCvG2aHp4ltqQ59Tv0pkJvgaqonMEJA",
            "https://static01.nyt.com/images/2016/02/19/magazine/19mag-devito-ss-slide-77Z2/19mag-devito-ss-slide-77Z2-superJumbo.jpg",
            "https://static01.nyt.com/images/2016/02/19/magazine/19mag-devito-ss-slide-YOAN/19mag-devito-ss-slide-YOAN-superJumbo.jpg",
            "https://bleedingcool.com/wp-content/uploads/2021/03/alwaystrollfoot-1-1200x900.jpg",
            "https://i.dailymail.co.uk/i/pix/2016/10/04/12/3915FEB100000578-3821289-image-a-63_1475581450001.jpg",
            "https://i.redd.it/lb3kmchyrogc1.jpeg",
            "https://memeguy.com/photos/images/my-sister-over-pronounced-the-to-in-danny-devito-and-it-gave-me-an-idea-388444.png",
            "https://i0.wp.com/criticaldispatches.com/wp-content/uploads/DannyDeVitoesPreview.png?fit=2006%2C1600&ssl=1",
            "https://i.kym-cdn.com/photos/images/original/002/057/734/d10.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIiG58d9Su0V1lNa0VKr6xHPdsbxW2RgZ4A&s"

        ]

        const devitoes_image = devitoes_gifs[Math.floor(Math.random() * devitoes_gifs.length)];
        const devitoes_embed = new Discord.MessageEmbed()
            .setTitle('Gotta Pay The Toe Toll!')
            .setColor('#12F0E3')
            .setDescription('You like what you see?')
            .setImage(devitoes_image);

        interaction.reply({ embeds: [devitoes_embed] })  
    
    

    

    }    

}    

    