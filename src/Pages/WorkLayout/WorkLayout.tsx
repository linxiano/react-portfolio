import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './styles.scss';

export const WorkLayout = () => {
	const opts = {
		standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
	};

	const downloadPDF = () => {
		fetch('steffen_riber_thomsen_cv.pdf').then((response) => {
			response.blob().then((blob) => {
				const fileURL = window.URL.createObjectURL(blob);
				const alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'steffen_riber_thomsen_cv.pdf';
				alink.click();
			});
		});
	};

	return (
		<>
			<div className={'work-container'}>
				<Document file='./steffen_riber_thomsen_cv.pdf' options={opts}>
					<Page pageNumber={1} className={'pdf-page'} />
					<Page pageNumber={2} className={'pdf-page'} />
				</Document>

				<div className={'work-download-container'}>
					<a href='#' onClick={downloadPDF}>
						{'Download'}
					</a>
				</div>
			</div>
		</>
	);
};
