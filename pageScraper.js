const scraperObject = {
	url: 'https://storage.googleapis.com/jus-challenges/challenge-crawler.html',
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		// Navigate to the selected page
		await page.goto(this.url);
		// Wait for the required DOM to be rendered
		//await page.waitForSelector('.page_inner');
		let dataTabela1 = {};
		dataTabela1['numProcesso'] = await page.$eval('#divDadosResultado-A > table > tbody > tr:nth-child(1) > td:nth-child(2) > table > tbody > tr:nth-child(1) > td > a:nth-child(1)', text => text.textContent);
		dataTabela1['ementa'] = await page.$eval('#divDadosResultado-A > table > tbody > tr:nth-child(1) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > div', text => text.textContent);
		dataTabela1['relator'] = await page.$eval('#divDadosResultado-A > table > tbody > tr:nth-child(1) > td:nth-child(2) > table > tbody > tr:nth-child(3) > td', text => text.textContent);
		dataTabela1['comarca'] = await page.$eval('#divDadosResultado-A > table > tbody > tr:nth-child(1) > td:nth-child(2) > table > tbody > tr:nth-child(4) > td', text => text.textContent);
		dataTabela1['orgaoJulgador'] = await page.$eval('#divDadosResultado-A > table > tbody > tr:nth-child(1) > td:nth-child(2) > table > tbody > tr:nth-child(5) > td', text => text.textContent);
		dataTabela1['dataJulgamento'] = await page.$eval('#divDadosResultado-A > table > tbody > tr:nth-child(1) > td:nth-child(2) > table > tbody > tr:nth-child(6) > td', text => text.textContent);
		dataTabela1['classeAssunto'] = await page.$eval('#divDadosResultado-A > table > tbody > tr:nth-child(1) > td:nth-child(2) > table > tbody > tr:nth-child(7) > td', text => text.textContent);
		dataTabela1['dataPublicacao'] = await page.$eval('#divDadosResultado-A > table > tbody > tr:nth-child(1) > td:nth-child(2) > table > tbody > tr:nth-child(8) > td', text => text.textContent);
		console.log(dataTabela1);
	}	
}

module.exports = scraperObject;
