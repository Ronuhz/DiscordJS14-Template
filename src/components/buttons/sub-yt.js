module.exports = {
  data: {
    name: "sub-yt",
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: "https://www.youtube.com/channel/UCClADeK6L_Jb_4_HrhWabvQ",
    });
  },
};