Vagrant.configure(2) do |config|
    config.vm.box = "ubuntu/trusty64"

    config.vm.provider "virtualbox" do |v|
      v.memory = 2048
    end

    config.vm.network "forwarded_port", guest: 3000, host: 3019

    config.vm.provision "install", type: "shell", inline: <<-SHELL
        sudo apt-get update
        sudo apt-get install -y build-essential libfontconfig
        curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
        sudo apt-get install -y nodejs
        curl https://install.meteor.com/ | sh
        sudo npm install -g spacejam
    SHELL

    config.vm.provision "change_ssh_dir", type: "shell", inline: <<-SHELL
        echo "cd /vagrant" >> /home/vagrant/.bashrc
    SHELL
end
