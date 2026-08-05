import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();
import { isMobile } from 'react-device-detect';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Link } from 'react-router-dom';
import { cvFile } from '../../designs/content';

export const CVLayout = () => {
	const opts = {
		standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
	};

	const downloadPDF = () => {
		fetch(`/${cvFile}`).then((response) => {
			response.blob().then((blob) => {
				const fileURL = window.URL.createObjectURL(blob);
				const alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = cvFile;
				alink.click();
			});
		});
	};

	return (
		<>
			<div className={`relative ${isMobile ? 'document-mobile' : ''}`}>
				<Document file={`/${cvFile}`} options={opts}>
					<Page pageNumber={1} className={'pdf-page'} />
					<Page pageNumber={2} className={'pdf-page'} />
				</Document>

				<div className={'absolute left-[30px] top-5 flex flex-col justify-center'}>
					<Link to={'/work'} className='m-1 rounded-md bg-black/30 px-2 py-1 text-[smaller] text-ink hover:bg-black active:text-accent'>
						{'Back to portfolio'}
					</Link>

					<a
						className='m-1 rounded-md bg-black/30 px-2 py-1 text-[smaller] text-ink hover:bg-black active:text-accent'
						href='#'
						onClick={downloadPDF}>
						{'Download'}
					</a>
				</div>
			</div>
		</>
	);
};
