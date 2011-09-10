all: pdf

pdf: clean
	@echo "Generating the pdf... "
	@pdflatex -output-directory ./build/ book.tex
	@echo "Success!\n\n"

clean:
	@printf "Cleaning files... "
	@rm -f build/*.{log,aux,toc,dvi,pdf}
	@echo "OK"

serve: pdf
	@sudo node server.js
