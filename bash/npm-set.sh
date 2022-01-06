npm config set always-auth true
npm config set //npm.pkg.github.com/:_authToken ${{ secrets.GH_PACKAGE_TOKEN }}   
npm config set @BlackWind57:registry https://npm.pkg.github.com
npm set email blackwind757@gmail.com
git config --global user.email "cristo1494@yahoo.com"
git config --global user.name "Darryl"
git config --list
git fetch
cat .gitconfig