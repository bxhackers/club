# atomhacks/club

This is the repository for the Bronx Science Hackers website. We use Jekyll to reuse code wherever possible, so this code should be usable on all major operating systems.

## Setup

### Check Ruby installation

To work on the site, you'll need to make sure that you have Ruby 2.1.0 or higher installed. Check your version with the following command:

```bash
$ ruby --version
```

If you don't have Ruby installed, [download and install it](https://www.ruby-lang.org/en/downloads/) from the official Ruby website.

### Install dependencies

Once you have Ruby installed, you'll need to install Bundler if you don't have it installed already.

```bash
$ gem install bundler
```

You'll now be able to use Bundler to install all other necessary dependencies.

```bash
$ bundle install
```

## Usage

After everything has been installed correctly, you should be able to use the following command to serve the site locally.

```bash
$ bundle exec jekyll serve
```

Now, open [http://localhost:4000](http://localhost:4000) in your browser, and you should be able to use and work on the Bronx Science Hackers website.

## License

The Bronx Science Hackers website is available under the MIT license. See the LICENSE file for details.
