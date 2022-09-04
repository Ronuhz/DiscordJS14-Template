const {
  SlashCommandBuilder,
  SelectMenuBuilder,
  ActionRowBuilder,
  SelectMenuOptionBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("menu")
    .setDescription("Returns a select menu!"),
  async execute(interaction, client) {
    const menu = new SelectMenuBuilder()
      .setCustomId("sub-menu")
      .setMinValues(1)
      .setMaxValues(1)
      .setPlaceholder("Select an option")
      .setOptions(
        new SelectMenuOptionBuilder({
          label: "Option #1",
          value: "https://www.youtube.com/channel/UCClADeK6L_Jb_4_HrhWabvQ",
        }),
        new SelectMenuOptionBuilder({
          label: "Option #2",
          value: "https://github.com/Ronuhz",
        })
      );

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menu)],
    });
  },
};
