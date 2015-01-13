// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
  service: "facebook"
});
ServiceConfiguration.configurations.insert({
	service: "facebook",
	appId: "760625697347921",
	secret: "22d0dbe773faacb35dc6a3fdece2f594"
});