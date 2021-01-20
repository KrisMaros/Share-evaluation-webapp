Following web app is a part of my University Final Year Project and provided code description is a part of my FYP report


Part of report Design 
4.6 Designed functionalities for web services
Various range of datasets described in this paragraph such as stock and mutual funds prices and dates, stock and mutual funds attributes ,lists of stock or fund names and symbols, and lists of filters will be provided by google spreadsheet and delivered to the application by Google script server-site API.
Google spreadsheet and its GoogleFinance function will serve as web service of the current project. The GoogleFinance function dynamically delivers information about any valid symbol that is passed through its function parameter and is publishing these information’s on the internet via spreadsheet URL address.

4.6.1 Historical data chart and select list filters.
Design and development of historical data chart that will be able to load and make comparison of multiple stock data within one graph to analyse various stock performance for specified time frame.
The type of dataset values loaded into chart will be modified. First dataset type will reflect its historical price change for the specified time frame. The second dataset type will display its price percentage change since last stock market session.
The datasets will be added or removed from a chart configuration to assure flexibility of performed analysis.
When date range will be selected, and first dataset loaded into chart the datepicker element and data type selector will be locked to prevent interference with existing datasets configuration.

An additional feature that must be created in order to specify a range of industry sectors for the given stock is a creation of the filters. Filters will be designed to let find a range of companies from a specified sector or country. This, in turn, will permit to compare P/E and ESP metrics across different shares from the given industry sector.
Additionally, the drop-down list will contain names of popular benchmark indexes for further evaluation.
Likewise stock the mutual funds analysis tools will contain filters feature. These filters allow searching for funds from selected range that indicates percentage amount of a fund income distribution for the period of twelve months. Moreover, additional filter permits to search for funds with highest rating that has been published by Morningstar financial company.
4.6.2 Improved design of attribute section.
Stock and fund attributes sections that will be located in Stock Analysis and Mutual Funds web pages contains list of attributes sent by web-service in order to support requested stock evaluation.
The design of this feature required additional functionality implementation to assist with management of large number of data received from web service for more transparent information analysis.
The preferred solution for this design requirement will be creation of tab elements to sort stock attributes into separate groups such as price information, stock metrics and additional stock data.
This design assure that provided attributes will be clearly identified and easily comparable with alternative datasets.
